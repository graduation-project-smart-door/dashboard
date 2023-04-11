export const PHONE_FORMATS: Record<string, string> = {
  phone7: '+7 ### ### ####',
  phone8: '8 ### ### ####',
}

export const SHOWED_PHONE_MASKS: Record<string, string> = {
  '8': '# (###) ### - ####',
  '+7': '+# (###) ### - ####',
}

export const IMAGE_TYPES = ['.jpeg', '.jpg', '.png']

export const ROLES_MAP: Record<string, string> = {
  admin: 'Админ',
  user: 'Пользователь',
  manager: 'Менеджер',
}

export const datePeriodOptions = [
  {
    value: 'week',
    label: 'Неделя',
  },
  {
    value: 'month',
    label: 'Месяц',
  },
  {
    value: 'halfYear',
    label: 'Пол года',
  },
  {
    value: 'year',
    label: 'Год',
  },
]
