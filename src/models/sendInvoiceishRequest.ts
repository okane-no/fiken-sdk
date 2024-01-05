/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type sendInvoiceishRequest = {
    /**
     * The method of sending. Has to be auto, email, ehf, efaktura, sms or letter.
     * If several methods are provided they should be in prioritized order as Fiken will only send the invoice to
     * the first successful available method. Method "auto" tries available methods for given customer based on
     * the information registered for the customer. The order of priority is EHF, eFaktura, Sms, and email.
     * Method "letter" means physical letter, printed and sent by our postal service partner (extra charge per
     * letter, available for recipient addresses in Norway only). The option "includeDocumentAttachments" is
     * not supported by method "letter", attachments are not included even if this option is set.
     *
     */
    method: Array<'email' | 'ehf' | 'efaktura' | 'sms' | 'letter' | 'auto'>;
    /**
     * Whether the document's attachment should be included when sending (True) or not (False).
     */
    includeDocumentAttachments: boolean;
    recipientName?: string;
    recipientEmail?: string;
    /**
     * Additional message to send with document.
     */
    message?: string;
    /**
     * document_link, attachment or auto. Defaults to auto which uses customer/company settings.
     */
    emailSendOption?: sendInvoiceishRequest.emailSendOption;
    /**
     * If sending with emailSendOption = attachment, this merges them into a single document if true.
     */
    mergeInvoiceAndAttachments?: boolean;
    /**
     * Brreg organization number. Defaults to the customers organization number if not provided.
     */
    organizationNumber?: string;
    /**
     * Defaults to the customers phone number. Format should include the country code. If a Norwegian phone number, the country code is not necessary.
     */
    mobileNumber?: string;
};

export namespace sendInvoiceishRequest {

    /**
     * document_link, attachment or auto. Defaults to auto which uses customer/company settings.
     */
    export enum emailSendOption {
        DOCUMENT_LINK = 'document_link',
        ATTACHMENT = 'attachment',
        AUTO = 'auto',
    }


}

