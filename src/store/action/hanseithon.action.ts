import { AxiosError } from 'axios';
import { Action } from 'redux';
import {
  ActiveReportData,
  Board,
  CategoryType,
  Comment,
  ErrorResponse,
  JobType,
  MatchMember,
  ModalTypes,
  TeamMemberType,
  TeamType,
} from 'store/model';
import { createStandardAction } from 'typesafe-actions';

export interface PostTeamParams {
  accessToken: string;
  category: CategoryType;
  teamName: string;
  userPosiotion: string;
}

export interface PostTeamResType {
  team: TeamType;
  code: number;
  createdAt: string;
}

export interface GetTeamResType {
  team: TeamType[];
}

export interface PutTeamParams {
  accessToken: string;
  team_pk: number;
  posiotion: string;
  code: number;
}

export interface PutTeamResType {
  teamMember: TeamMemberType;
}

export interface PostTeamMatchParams {
  accessToken: string;
  category: CategoryType;
  position: string;
  introduction: string;
}

export interface PostTeamMatchResType {
  success: boolean;
}

export interface GetTeamParams {
  accessToken: string;
  category: CategoryType;
}

export interface GetTeamMatchParams {
  accessToken: string;
  category: CategoryType;
}

export interface GetTeamMatchResType {
  match: MatchMember[];
}

export const DEEM = 'DEEM';

export const MODAL = 'MODAL';

export const AGREE = 'AGREE';

export const SET_TEAM_PK = 'SET_TEAM_PK';

export const GET_TEAM = 'GET_TEAM';
export const GET_TEAM_SUCCESS = 'GET_TEAM_SUCCESS';
export const GET_TEAM_FAILURE = 'GET_TEAM_FAILURE';

export const POST_TEAM = 'POST_TEAM';
export const POST_TEAM_SUCCESS = 'POST_TEAM_SUCCESS';
export const POST_TEAM_FAILURE = 'POST_TEAM_FAILURE';

export const PUT_TEAM = 'PUT_TEAM';
export const PUT_TEAM_SUCCESS = 'PUT_TEAM_SUCCESS';
export const PUT_TEAM_FAILURE = 'PUT_TEAM_FAILURE';

export const GET_TEAM_MATCH = 'GET_TEAM_MATCH';
export const GET_TEAM_MATCH_SUCCESS = 'GET_TEAM_MATCH_SUCCESS';
export const GET_TEAM_MATCH_FAILURE = 'GET_TEAM_MATCH_FAILURE';

export const POST_TEAM_MATCH = 'POST_TEAM_MATCH';
export const POST_TEAM_MATCH_SUCCESS = 'POST_TEAM_MATCH_SUCCESS';
export const POST_TEAM_MATCH_FAILURE = 'POST_TEAM_MATCH_FAILURE';

export const REST_STATUS = 'RESET_STATUS';

export class Deem implements Action {
  public readonly type = DEEM;

  public constructor(public payload: boolean) {}
}

export class Modal implements Action {
  public readonly type = MODAL;

  public constructor(public payload: ModalTypes) {}
}

export class Agree implements Action {
  public readonly type = AGREE;

  public constructor(public payload: boolean) {}
}

export class SetTeamPk implements Action {
  public readonly type = SET_TEAM_PK;

  public constructor(public payload: number) {}
}

export class GetTeam implements Action {
  public readonly type = GET_TEAM;

  public constructor(public payload: GetTeamParams) {}
}

export class GetTeamSuccess implements Action {
  public readonly type = GET_TEAM_SUCCESS;

  public constructor(public payload: GetTeamResType) {}
}

export class GetTeamFailure implements Action {
  public readonly type = GET_TEAM_FAILURE;

  public constructor(public payload: ErrorResponse) {}
}

export class PostTeam implements Action {
  public readonly type = POST_TEAM;

  public constructor(public payload: PostTeamParams) {}
}

export class PostTeamSuccess implements Action {
  public readonly type = POST_TEAM_SUCCESS;

  public constructor(public payload: PostTeamResType) {}
}

export class PostTeamFailure implements Action {
  public readonly type = POST_TEAM_FAILURE;

  public constructor(public payload: ErrorResponse) {}
}

export class PutTeam implements Action {
  public readonly type = PUT_TEAM;

  public constructor(public payload: PutTeamParams) {}
}

export class PutTeamSuccess implements Action {
  public readonly type = PUT_TEAM_SUCCESS;

  public constructor(public payload: PutTeamResType & { pk: number }) {}
}

export class PutTeamFailure implements Action {
  public readonly type = PUT_TEAM_FAILURE;

  public constructor(public payload: ErrorResponse) {}
}

export class GetTeamMatch implements Action {
  public readonly type = GET_TEAM_MATCH;

  public constructor(public payload: GetTeamMatchParams) {}
}
export class GetTeamMatchSuccess implements Action {
  public readonly type = GET_TEAM_MATCH_SUCCESS;

  public constructor(public payload: GetTeamMatchResType) {}
}
export class GetTeamMatchFailure implements Action {
  public readonly type = GET_TEAM_MATCH_FAILURE;

  public constructor(public payload: ErrorResponse) {}
}

export class PostTeamMatch implements Action {
  public readonly type = POST_TEAM_MATCH;

  public constructor(public payload: PostTeamMatchParams) {}
}

export class PostTeamMatchSuccess implements Action {
  public readonly type = POST_TEAM_MATCH_SUCCESS;

  public constructor(public payload: PostTeamMatchResType) {}
}

export class PostTeamMatchFailure implements Action {
  public readonly type = POST_TEAM_MATCH_FAILURE;

  public constructor(public payload: ErrorResponse) {}
}

export class ResetStatus implements Action {
  public readonly type = REST_STATUS;
}

export const hanseithonActions = {
  deem: createStandardAction(DEEM)<boolean>(),
  modal: createStandardAction(MODAL)<ModalTypes>(),
  agree: createStandardAction(AGREE)<boolean>(),
  setTeamPk: createStandardAction(SET_TEAM_PK)<number>(),
  getTeam: createStandardAction(GET_TEAM)<GetTeamParams>(),
  postTeam: createStandardAction(POST_TEAM)<PostTeamParams>(),
  putTeam: createStandardAction(PUT_TEAM)<PutTeamParams>(),
  getTeamMatch: createStandardAction(GET_TEAM_MATCH)<GetTeamMatchParams>(),
  postTeamMatch: createStandardAction(POST_TEAM_MATCH)<PostTeamMatchParams>(),
  resetStatus: createStandardAction(REST_STATUS)(),
};

export type hanseithonReducerActions =
  | Deem
  | Modal
  | Agree
  | SetTeamPk
  | GetTeam
  | GetTeamSuccess
  | GetTeamFailure
  | PostTeam
  | PostTeamSuccess
  | PostTeamFailure
  | PutTeam
  | PutTeamSuccess
  | PutTeamFailure
  | GetTeamMatch
  | GetTeamMatchSuccess
  | GetTeamMatchFailure
  | PostTeamMatch
  | PostTeamMatchSuccess
  | PostTeamMatchFailure
  | ResetStatus;