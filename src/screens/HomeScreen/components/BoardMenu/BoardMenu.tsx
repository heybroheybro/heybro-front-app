import React from 'react'
import { BoardMenuItem } from './BoardMenuItem'
import { BoardMenuContainer } from './styles'
import { useIntl } from 'react-intl'
import { useHomeMenuContext } from '@heybro/contexts/homeMenu'
import QuestionIcon from '@heybro/assets/images/ic-hello-24.png'
import TipIcon from '@heybro/assets/images/ic-message-24.png'

export function BoardMenu() {
    const intl = useIntl()
    const { selectedBoard, actions } = useHomeMenuContext()

    return (
        <BoardMenuContainer>
            <BoardMenuItem
                iconSource={QuestionIcon}
                text={intl.formatMessage({ id: '@COMMON-001' })}
                selected={selectedBoard === 'QUESTION'}
                onPress={() => actions.updateBoard('QUESTION')}
            />
            <BoardMenuItem
                iconSource={TipIcon}
                text={intl.formatMessage({ id: '@COMMON-002' })}
                selected={selectedBoard === 'TIP'}
                onPress={() => actions.updateBoard('TIP')}
                style={{ marginLeft: 8 }}
            />
        </BoardMenuContainer>
    )
}
