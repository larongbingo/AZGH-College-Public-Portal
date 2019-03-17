ENDPOINTS

<code>POST /apis/login</code>
  - Creates a new session token
  - Params: 
    - <code>username: string</code>
    - <code>password: string {min: 8, max: 72}</code>
  - Note: <code>username</code> and <code>password</code> is a <code>multipart/form-data</code> encoding

<code>POST /apis/register</code>
  - TODO: Put all info here

<code>GET /apis/subjects</code>
  - Returns a list of subjects available
  - Query:
    - <code>subjectTitle: string</code>
  - Example:
    - <code>/apis/subjects?subjectTitle=this is america</code>

<code>POST /apis/subjects/enroll</code>
  - Assigns the given subject code to authenticated student
  - Params:
    - <code>sessionToken: string - Can be retrieved from <i>/apis/login</i></code>
    - <code>subjectCode: string - Can be retrieved from <i>/apis/subjects</i></code>