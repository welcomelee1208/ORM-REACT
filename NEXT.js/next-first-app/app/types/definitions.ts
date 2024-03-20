//전역 단일 게시글 타입
export type Article = {
  article_id?: number;
  article_type_code?: number;
  board_type_code?: number;
  contents: string | null;
  edit_date?: string | null;
  edit_member_id?: number | null;
  ip_address?: string;
  is_display_code: number;
  reg_date?: string;
  reg_member_id?: 1;
  title: string;
  view_count?: number;
};
//전역 게시글 타입 인터페이스
export interface IAriticle {
  article_id?: number;
  article_type_code?: number;
  board_type_code?: number;
  contents: string | null;
  edit_date?: string | null;
  edit_member_id?: number | null;
  ip_address?: string;
  is_display_code: number;
  reg_date?: string;
  reg_member_id?: 1;
  title: string;
  view_count?: number;
}

export type member = {
  email: string;
  name: string;
  password: string;
};
