import { Agreements } from '@heybro/api/agreement/types'
import React, { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react'
import { useIntl } from 'react-intl'
import { TermItem, TermsContextState } from './types'

const TermsContext = createContext<TermsContextState>({ allAgreed: false, requiredAllAgreed: false, terms: [] })

interface Props extends PropsWithChildren {
    agreements: Agreements
}

export const TermsProvider: React.FC<Props> = ({ children, agreements }) => {
    const intl = useIntl()
    const [terms, setTerms] = useState<TermItem[]>([
        {
            text: intl.formatMessage({ id: '@TERMS-002' }),
            required: true,
            checked: false,
        },
        {
            boldText: intl.formatMessage({ id: '@COMMON-009' }),
            text: intl.formatMessage({ id: '@TERMS-003' }),
            required: true,
            checked: false,
        },
        {
            boldText: intl.formatMessage({ id: '@TERMS-004' }),
            text: intl.formatMessage({ id: '@TERMS-005' }),
            required: true,
            checked: false,
        },
        {
            boldText: intl.formatMessage({ id: '@TERMS-006' }),
            text: intl.formatMessage({ id: '@TERMS-007' }),
            required: true,
            checked: false,
        },
        {
            text: intl.formatMessage({ id: '@TERMS-008' }),
            required: false,
            checked: false,
        },
    ])
    const allAgreed = useMemo(() => terms.every(({ checked }) => checked), [terms])
    const requiredAllAgreed = useMemo(() => {
        return allAgreed ? allAgreed : terms.filter(({ required }) => required).every(({ checked }) => checked)
    }, [terms, allAgreed])

    const actions = useMemo(() => {
        return {
            updateAllAgreementState: () => {
                const nextState = !terms.every(({ checked }) => checked)
                setTerms((prev) => prev.map((item) => ({ ...item, checked: nextState })))
            },

            updateAgreement: (index: number) => {
                setTerms((prev) =>
                    prev.map((item, _index) => (index === _index ? { ...item, checked: !item.checked } : item)),
                )
            },
        }
    }, [terms])

    useEffect(() => {
        setTerms((prev) => {
            const next = [...prev]
            next[0].checked = agreements.age
            next[1].checked = agreements.term
            next[2].checked = agreements.privacy
            next[3].checked = agreements.location
            next[4].checked = agreements.event
            return next
        })
    }, [agreements])

    return (
        <TermsContext.Provider
            value={{
                terms,
                allAgreed,
                requiredAllAgreed,
                updateAllAgreementState: actions.updateAllAgreementState,
                updateAgreement: actions.updateAgreement,
            }}>
            {children}
        </TermsContext.Provider>
    )
}

export const useTermsContext = () => useContext(TermsContext)
