export interface TermItem {
    text: string
    boldText?: string
    required: boolean
    checked: boolean
}

export interface TermsContextState {
    allAgreed: boolean
    requiredAllAgreed: boolean
    updateAllAgreementState?: () => void
    updateAgreement?: (index: number) => void
    terms: TermItem[]
}
