export interface DetectedIssue {
    id: string;
    status: string;
    code: string;
    severity: string;
    patient?: string;
    author?: string;
    implicated: string;
    evidence: string;
    detail: string;
    reference: string;
}