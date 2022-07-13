export const setCookie = (
  key: string,
  value: any,
  daysUntilExpiration: number
): void => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + daysUntilExpiration);
  document.cookie =
    escape(key) +
    '=' +
    value +
    ';path=/' +
    ';expires=' +
    expirationDate.toUTCString() +
    ';';
};

export const getCookie = (key: string): string | null => {
  const prefix = key + '=';
  console.log(document.cookie);
  const cookieSections = document.cookie.split(';').map((s) => s.trim());

  for (const section of cookieSections) {
    console.log(section);
    if (section.indexOf(key) === 0) {
      return section.substring(prefix.length, section.length);
    }
  }

  return null;
};
