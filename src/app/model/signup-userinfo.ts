// signup.model.ts


export interface SignupUserinfo {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    userType?: string; // Optional as it depends on user selection
    workExperience?: string; // Optional for Job Hunter
    jobType?: string; // Optional for Job Hunter
    state?: string; // Optional for Job Hunter
    city?: string; // Optional for Job Hunter
    designation?: string; // Optional for Company HR
    department?: string; // Optional for Company HR
    companyName?: string; // Optional for Company HR
    cin?: string; // Optional for Company
    businessType?: string; // Optional for Company
    numberOfEmployees?: string; // Optional for Company
    companyWebsite?: string; // Optional for Company
    agreeTerms: boolean;
  }
  