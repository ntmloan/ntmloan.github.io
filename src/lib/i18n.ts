import { defineI18n } from 'fumadocs-core/i18n';
import { defineI18nUI } from 'fumadocs-ui/i18n';

export const i18n = defineI18n({
  languages: ['en', 'vi'],
  defaultLanguage: 'en',
  hideLocale: 'default-locale',
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
});
