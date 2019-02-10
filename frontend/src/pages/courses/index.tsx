import React, { FunctionComponent } from "react";
import { Col, Container, Row } from "react-bootstrap";

export const courses: FunctionComponent = () => (
  <Container>
    <Row>
      <h2>Courses Offered:</h2>
      <ul>
        <li>
          Senior High School Strands
          <ul>
            <li>Humanities and Social Science (HUMMS)</li>
            <li>General Academic Strand (GAS)</li>
            <li>Science, Technology, Engineering and Math (STEM)</li>
            <li>Accountancy, Business, and Management (ABM)</li>
          </ul>
        </li>
        <li>
          Technical, Vocational, Livelihood Tracks
          <ul>
            <li>Home Economics</li>
            <li>Information and Communications Technology</li>
            <li>Industrial Arts</li>
          </ul>
        </li>
        <li>
          College Courses
          <ul>
            <li>Information System & Technology (2 Years)</li>
            <li>Medical Clerk Office Secretarial (2 Years)</li>
            <li>Bio - Medical Technician (2 Years)</li>
            <li>Hospitality & Tourism Management (2 Years)</li>
            <li>Hotel Restaurant Services (2 Years)</li>
            <li>Bachelor of Science in Information Technology</li>
            <li>Bachelor of Science in Psychology</li>
            <li>Bachelor of Science in Hotel and Restaurant Management</li>
          </ul>
        </li>
        <li>
          Certificate Courses
          <ul>
            <li>
              Language Courses
              <ul>
                <li>Japanese</li>
                <li>English</li>
              </ul>
            </li>
            <li>Culinary Short Course</li>
            <li>Food & Beverages</li>
            <li>House Keeping</li>
            <li>Front Office</li>
            <li>SMAW NCII</li>
            <li>
              CNC Lathe Machine Operation
              <ul>
                <li>NCII</li>
                <li>NCIII</li>
              </ul>
            </li>
            <li>NCLEX Review</li>
            <li>IELTS Review</li>
            <li>BLS</li>
            <li>ACLS & ECG Reading</li>
            <li>Disaster Management</li>
            <li>Basic Fire Fighting</li>
            <li>Basic IVT</li>
            <li>IVT Updates</li>
            <li>First Aid</li>
            <li>Nursing Skill</li>
          </ul>
        </li>
      </ul>
    </Row>
  </Container>
);

export default courses;
