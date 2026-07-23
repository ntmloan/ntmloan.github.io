import { defineI18n } from 'fumadocs-core/i18n';
import { defineI18nUI } from 'fumadocs-ui/i18n';

export const i18n = defineI18n({
  languages: ['en', 'vi', 'ja'],
  defaultLanguage: 'en',
  // Static export (GitHub Pages) has no server to rewrite an unprefixed
  // "/docs" to "/en/docs", so every language keeps its locale prefix.
});

export const i18nUI = defineI18nUI(i18n, {
  en: {
    displayName: 'English',
  },
  vi: {
    displayName: 'Tiếng Việt',
    'Search(search dialog)': 'Tìm kiếm',
    'Search(search trigger)': 'Tìm kiếm',
    'No results found(search dialog)': 'Không tìm thấy kết quả',
    'On this page(table of contents)': 'Trên trang này',
    'No Headings(table of contents)': 'Không có mục lục',
    'Last updated on(page footer)': 'Cập nhật lần cuối vào',
    'Choose a language(language switcher)': 'Chọn ngôn ngữ',
    'Next Page(pagination)': 'Trang tiếp theo',
    'Previous Page(pagination)': 'Trang trước',
    'Edit on GitHub(edit page)': 'Chỉnh sửa trên GitHub',
    'Page Not Found(404 not found page)': 'Không tìm thấy trang',
    'Back to Home(404 not found page)': 'Về trang chủ',
  },
  ja: {
    displayName: '日本語',
    'Search(search dialog)': '検索',
    'Search(search trigger)': '検索',
    'No results found(search dialog)': '検索結果が見つかりません',
    'On this page(table of contents)': 'このページ内',
    'No Headings(table of contents)': '見出しがありません',
    'Last updated on(page footer)': '最終更新日',
    'Choose a language(language switcher)': '言語を選択',
    'Next Page(pagination)': '次のページ',
    'Previous Page(pagination)': '前のページ',
    'Edit on GitHub(edit page)': 'GitHubで編集',
    'Page Not Found(404 not found page)': 'ページが見つかりません',
    'Back to Home(404 not found page)': 'ホームに戻る',
  },
});
