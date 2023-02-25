import { Text } from '@heybro/components/Text'
import { CheckBox } from './CheckBox'
import { CheckListItemMain } from './CheckListItemMain'
import { CheckListItemSection } from './styles'

export const CheckListItem = Object.assign(CheckListItemMain, {
    Section: CheckListItemSection,
    Text,
    CheckBox,
})
