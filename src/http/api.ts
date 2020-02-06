import axios from 'axios';
import Firebase from './Firebase';

const buildEnv: any = process.env.REACT_APP_BUILD_ENV;

class Api {
  tokenID: string;
  baseURL: string;
  userID: string;
  auth: firebase.auth.Auth | null;

  constructor() {
    this.tokenID = '';
    this.userID = '';
    this.baseURL =
      buildEnv === 'production'
        ? 'https://api.blossom.vc/v1'
        : 'https://development.api.blossom.vc/v1';
    this.auth = null;
  }

  initializeApi(tokenID: string, userID: string): void {
    this.tokenID = tokenID;
    this.userID = userID;
    this.auth = Firebase.auth();
  }

  getReportsList(limit?: number): Promise<any> {
    let url = `${this.baseURL}/reports/reports`;

    if (limit) {
      url += `?limit=${limit}`;
    }

    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  getReport(reportID: string | undefined): Promise<any> {
    let url = `${this.baseURL}/reports/report-summary?report_id=${reportID}`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  getCompany(companyID: string | undefined): Promise<any> {
    let url = `${this.baseURL}/entities/company-detail?company_id=${companyID}`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  getCompanyMetrics(companyID: string | undefined): Promise<any> {
    let url = `${this.baseURL}/entities/company-metrics?company_id=${companyID}`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  getCompanyNote(companyID: string | undefined): Promise<any> {
    let url = `${this.baseURL}/entity-notes?entity_type=company&entity_id=${companyID}`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  postCompanyNote(companyID: string | undefined, text: string): Promise<any> {
    let url = `${this.baseURL}/entity-notes?entity_type=company&entity_id=${companyID}`;
    url = this.appendQueryParams(url);

    return axios.post(url, { text: text });
  }

  getUserWatchlists(): Promise<any> {
    let url = `${this.baseURL}/predefined-watchlists/watchlists`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  getWatchlist(watchlistID: string): Promise<any> {
    let url = `${this.baseURL}/predefined-watchlists/watchlist-summary?watchlist_id=${watchlistID}`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  postForgotEmail(name: string, email: string, message: string): Promise<any> {
    let url = `${this.baseURL}/contact/forgot-username`;
    url = this.appendQueryParams(url);

    return axios.post(url, {
      name: name,
      email_address: email,
      message: message
    });
  }

  postContactSupport(issue_category: string, message: string): Promise<any> {
    let url = `${this.baseURL}/contact/contact-support`;
    url = this.appendQueryParams(url);

    return axios.post(url, {
      issue_category,
      message
    });
  }

  postContactSalesConsole(message: string): Promise<any> {
    let url = `${this.baseURL}/contact/contact-sales`;
    url = this.appendQueryParams(url);

    return axios.post(url, {
      message
    });
  }

  postContactSalesPublic(
    name: string,
    email_address: string,
    message: string,
    company_name: string,
    job_title: string,
    country: string
  ): Promise<any> {
    let url = `${this.baseURL}/contact/contact-sales`;
    url = this.appendQueryParams(url);

    return axios.post(url, {
      name,
      email_address,
      message,
      company_name,
      job_title,
      country
    });
  }

  getUserDetails(): Promise<any> {
    let url = `${this.baseURL}/account`;
    url = this.appendQueryParams(url);
    return axios.get(url);
  }

  getPersonExcelDownloadURL(personID: string): string {
    let url = `${this.baseURL}/entities/person-excel?person_id=${personID}`;
    url = this.appendQueryParams(url);

    return url;
  }

  getCompanyExcelDownloadURL(companyID: string): string {
    let url = `${this.baseURL}/entities/company-excel?company_id=${companyID}`;
    url = this.appendQueryParams(url);

    return url;
  }

  getReportExcelDownloadURL(reportID: string): string {
    let url = `${this.baseURL}/reports/report-excel?report_id=${reportID}`;
    url = this.appendQueryParams(url);

    return url;
  }

  getWatchlistExcelDownloadURL(watchListID: string): string {
    let url = `${this.baseURL}/predefined-watchlists/watchlist-excel?watchlist_id=${watchListID}`;
    url = this.appendQueryParams(url);

    return url;
  }

  getLikedEntitiesExcelDownloadURL(): string {
    let url = `${this.baseURL}/feedback/liked-entities-excel`;
    url = this.appendQueryParams(url);

    return url;
  }

  getDislikedEntitiesExcelDownloadURL(): string {
    let url = `${this.baseURL}/feedback/disliked-entities-excel`;
    url = this.appendQueryParams(url);

    return url;
  }

  getCustomWatchlistExcelDownloadURL(customwatchlistID: string): string {
    let url = `${this.baseURL}/custom-watchlists/custom-watchlist-excel?custom_watchlist_id=${customwatchlistID}`;
    url = this.appendQueryParams(url);

    return url;
  }

  appendQueryParams(url: string): string {
    url += url.includes('?') ? `&` : `?`;

    return (url += `token_id=${this.tokenID}&user_id=${this.userID}`);
  }

  editUserProfile(data: any): Promise<any> {
    let url = `${this.baseURL}/account`;
    url = this.appendQueryParams(url);

    const user: any = Firebase.auth().currentUser;

    return axios.post(url, {
      email: user.email,
      name: data.name,
      country: data.country,
      company_name: data.company_name,
      opted_into_emails: data.opted_into_emails
    });
  }

  dislikeEntity(
    entityID: string,
    entityType: string,
    state: boolean,
    reason?: string
  ): Promise<any> {
    let url = `${this.baseURL}/feedback/dislike-entity?entity_id=${entityID}&entity_type=${entityType}&reason?=${reason}`;
    url = this.appendQueryParams(url);

    return axios.post(url, { state });
  }

  getDislikedEntities(): Promise<any> {
    let url = `${this.baseURL}/feedback/disliked-entities`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  IsEntityDisliked(entityID: string, entityType: string): Promise<any> {
    let url = `${this.baseURL}/feedback/is-disliked?entity_id=${entityID}&entity_type=${entityType}`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  likeEntity(
    entityID: string,
    entityType: string,
    state: boolean
  ): Promise<any> {
    let url = `${this.baseURL}/feedback/like-entity?entity_id=${entityID}&entity_type=${entityType}`;
    url = this.appendQueryParams(url);

    return axios.post(url, { state });
  }

  getLikedEntities(): Promise<any> {
    let url = `${this.baseURL}/feedback/liked-entities`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  IsEntityLiked(entityID: string, entityType: string): Promise<any> {
    let url = `${this.baseURL}/feedback/is-liked?entity_id=${entityID}&entity_type=${entityType}`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  GetUserCompany(): Promise<any> {
    let url = `${this.baseURL}/user/company-name`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  createCustomWatchlist(name: string, description?: string): Promise<any> {
    let url = `${this.baseURL}/custom-watchlists/create-custom-watchlist`;
    url = this.appendQueryParams(url);

    return axios.post(url, { name, description });
  }

  deleteCustomWatchlist(custom_watchlist_id: string | undefined): Promise<any> {
    let url = `${this.baseURL}/custom-watchlists/delete-custom-watchlist?custom_watchlist_id=${custom_watchlist_id}`;
    url = this.appendQueryParams(url);

    return axios.post(url);
  }

  editCustomWatchlist(
    custom_watchlist_id: string,
    name: string,
    description?: string
  ): Promise<any> {
    let url = `${this.baseURL}/custom-watchlists/edit-custom-watchlist?custom_watchlist_id=${custom_watchlist_id}`;
    url = this.appendQueryParams(url);

    return axios.post(url, { name, description });
  }

  addCompanyToCustomWatchlist(
    custom_watchlist_id: string,
    company_id: string
  ): Promise<any> {
    let url = `${this.baseURL}/custom-watchlists/add-company-to-custom-watchlist?custom_watchlist_id=${custom_watchlist_id}&company_id=${company_id}`;
    url = this.appendQueryParams(url);

    return axios.post(url);
  }

  removeCompanyFromCustomWatchlist(
    custom_watchlist_id: string,
    company_id: string
  ): Promise<any> {
    let url = `${this.baseURL}/custom-watchlists/remove-company-from-custom-watchlist?custom_watchlist_id=${custom_watchlist_id}&company_id=${company_id}`;
    url = this.appendQueryParams(url);

    return axios.post(url);
  }

  getCustomWatchlistsContainingCompany(company_id: string): Promise<any> {
    let url = `${this.baseURL}/custom-watchlists/custom-watchlists-containing-company?company_id=${company_id}`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  addPersonToCustomWatchlist(
    custom_watchlist_id: string,
    person_id: string
  ): Promise<any> {
    let url = `${this.baseURL}/custom-watchlists/add-person-to-custom-watchlist?custom_watchlist_id=${custom_watchlist_id}&person_id=${person_id}`;
    url = this.appendQueryParams(url);

    return axios.post(url);
  }

  removePersonFromCustomWatchlist(
    custom_watchlist_id: string,
    person_id: string
  ): Promise<any> {
    let url = `${this.baseURL}/custom-watchlists/remove-person-from-custom-watchlist?custom_watchlist_id=${custom_watchlist_id}&person_id=${person_id}`;
    url = this.appendQueryParams(url);

    return axios.post(url);
  }

  getCustomWatchlistsContainingPerson(person_id: string): Promise<any> {
    let url = `${this.baseURL}/custom-watchlists/custom-watchlists-containing-person?person_id=${person_id}`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  getCustomWatchlistSummary(
    custom_watchlist_id: string | undefined
  ): Promise<any> {
    let url = `${this.baseURL}/custom-watchlists/custom-watchlist-summary?custom_watchlist_id=${custom_watchlist_id}`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  trackCompany(query: string): Promise<any> {
    let url = `${this.baseURL}/input/company?company_name=${query}`;
    url = this.appendQueryParams(url);

    return axios.post(url);
  }

  getCustomWatchlists(): Promise<any> {
    let url = `${this.baseURL}/custom-watchlists/custom-watchlists`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  isAdmin(): Promise<any> {
    let url = `${this.baseURL}/admin/is-admin`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  hasTeam(): Promise<any> {
    let url = `${this.baseURL}/team/has-team`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  getTeamCustomWatchlists(): Promise<any> {
    let url = `${this.baseURL}/team/custom-watchlists`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  getTeamLikedEntities(): Promise<any> {
    let url = `${this.baseURL}/team/liked-entities`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  getTeamDislikedEntities(): Promise<any> {
    let url = `${this.baseURL}/team/disliked-entities`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  getTeamNotes(): Promise<any> {
    let url = `${this.baseURL}/team/notes`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  getAdminData(endpoint?: string): Promise<any> {
    let url = `${this.baseURL}/admin/${endpoint}`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  getUnreviewedEntities(): Promise<any> {
    let url = `${this.baseURL}/feedback/unreviewed-entities`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  GetUserPreferences(): Promise<any> {
    let url = `${this.baseURL}/preferences/company-filtering`;
    url = this.appendQueryParams(url);

    return axios.get(url);
  }

  UpdateUserPreferences(data: any): Promise<any> {
    let url = `${this.baseURL}/preferences/company-filtering`;
    url = this.appendQueryParams(url);

    return axios.post(url, data);
  }
}

export default new Api();
