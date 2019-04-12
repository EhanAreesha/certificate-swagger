
interface ICertificateList {
    id?:string;
    userId?: string;
    username?:string;
    resourceId?:string;
    resourceType?: string;
    resourceVersion?: string;
    resourceTitle?:string;    
    issuedDate?:string;
    isValid?: boolean;
}

interface ICertificates {
    certificateList?:ICertificateList[];
    certificateTempList?:ICertificateList[];
    totalRecords?:number;
}