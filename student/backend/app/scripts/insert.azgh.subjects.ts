import { Program } from "../database/models/program";
import "../database/orm";

(async function() {
  let subjects: Array<{title: string, code: string, description: string}> = [
    { title:
      "Senior High School Strand - Humanities and Social Science (HUMMS)",
      code: "SNRHS-HUMMS",
      description: "" },
    { title: "Senior High School Strand - General Academic Strand (GAS)",
      code: "SNRHS-GAS",
      description: "" },
    { title:
      "Senior High School Strand - Science, Technology, Engineering and Math (STEM)",
      code: "SNRHS-STEM",
      description: "" },
    { title:
      "Senior High School Strand - Accountancy, Business, and Management (ABM)",
      code: "SNRHS-ABM",
      description: "" },
    { title: "Technical, Vocational, Livelihood Track - Home Economics",
      code: "TVL-HOMEECON",
      description: "" },
    { title:
      "Technical, Vocational, Livelihood Track - Information and Communications Technology",
      code: "TVL-ICT",
      description: "" },
    { title: "Technical, Vocational, Livelihood Track - Industrial Arts",
      code: "TVL-INDARTS",
      description: "" },
    { title: "College Course - Information System & Technology (2 Years)",
      code: "COLLEGE-INFOSYSTECH",
      description: "" },
    { title:
      "College Course - Medical Clerk Office Secretarial (2 Years)",
      code: "COLLEGE-MEDCLERK",
      description: "" },
    { title: "College Course - Bio - Medical Technician (2 Years)",
      code: "COLLEGE-BIOMED",
      description: "" },
    { title:
      "College Course - Hospitality & Tourism Management (2 Years)",
      code: "COLLEGE-HOSPITALITY",
      description: "" },
    { title: "College Course - Hotel Restaurant Services (2 Years)",
      code: "COLLEGE-HOTELREST",
      description: "" },
    { title:
      "College Course - Bachelor of Science in Information Technology",
      code: "COLLEGE-BSIT",
      description: "" },
    { title: "College Course - Bachelor of Science in Psychology",
      code: "COLLEGE-BSPSYCH",
      description: "" },
    { title:
      "College Course - Bachelor of Science in Hotel and Restaurant Management",
      code: "COLLEGE-BSHRM",
      description: "" },
    { title: "Language Course - Japanese",
      code: "LANG-JAP",
      description: "" },
    { title: "Language Course - English", code: "LANG-ENG", description: "" },
    { title: "Certificate Course - Culinary Short Course",
      code: "CERT-CULINARY",
      description: "" },
    { title: "Certificate Course - Food & Beverages",
      code: "CERT-FOODBEVE",
      description: "" },
    { title: "Certificate Course - House Keeping",
      code: "CERT-HOUSEKEEP",
      description: "" },
    { title: "Certificate Course - Front Office",
      code: "CERT-FRONTOFFICE",
      description: "" },
    { title: "Certificate Course - SMAW NCII",
      code: "CERT-SMAWII",
      description: "" },
    { title: "Certificate Course - CNC Lathe Machine Operation NCII",
      code: "CERT-CNCLATHENCII",
      description: "" },
    { title: "Certificate Course - CNC Lathe Machine Operation NCIII",
      code: "CERT-CNCLATHENCIII",
      description: "" },
    { title: "Certificate Course - NCLEX Review",
      code: "CERT-NCLEXREVIEW",
      description: "" },
    { title: "Certificate Course - IELTS Review",
      code: "CERT-IELTSREVIEW",
      description: "" },
    { title: "Certificate Course - BLS", code: "CERT-BLS", description: "" },
    { title: "Certificate Course - ACLS & ECG Reading",
      code: "CERT-ACLSECG",
      description: "" },
    { title: "Certificate Course - Disaster Management",
      code: "CERT-DISASTERMGMT",
      description: "" },
    { title: "Certificate Course - Basic Fire Fighting",
      code: "CERT-BASICFIREFIGHT",
      description: "" },
    { title: "Certificate Course - Basic IVT",
      code: "CERT-BASICIVT",
      description: "" },
    { title: "Certificate Course - IVT Updates",
      code: "CERT-IVTUPDATES",
      description: "" },
    { title: "Certificate Course - First Aid",
      code: "CERT-FIRSTAID",
      description: "" },
    { title: "Certificate Course - Nursing Skill",
      code: "CERT-NURSING",
      description: "" }
  ];

  try {
    for(let subject of subjects) {
      if(subject) {
        await Program.create(subject);
      }
    }
  }
  catch(err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
})();
