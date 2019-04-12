interface ICertificateObj {
  id?: string;
  Title?: string;
  ResourceType?: string;
  IssuedDate?: string;
  UserName?: string;
}

interface ICertificate {
  certificateId?: string;
  leftLogo?: string;
  rightLogo?: string;
  certificate?: ICertificateObj;
}
