export type Contact={
  firstname: string;
  lastname: string;
  telnum: number;
  email: string;
  agree: boolean;
  contacttype: "None"|"Email"|"Phone";
  message: string;
};


export const ContactOptions=["None","Email","Phone"]

