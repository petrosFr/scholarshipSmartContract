# scholarshipSmartContract

## Using a collateral on a smart contract as a security for a commitment in a scholarship

There are a lot of universities and organizations that propose scholarships for students to continue their studies and improve their competencies in different domains! As there is a limited number of scholarships, the challenge for the organizers and supervisors is to give these scholarships to the students who deserve them.

This project is designed for providers of grants (donors) to propose a scholarship to students on condition of commitment in scholarships (an academic year, a training, or an internship). The student (or her guarantor) will have to add Ethereum as a collateral. At the end of the scholarship, the student can withdraw the Ethereum to her address (or guarantor's address) when she passes a test at the end or does the research she had to, otherwise, this collateral will not be restored to the student and will be used to fund a new opportunity for a new student.
We believe that this project helps the donors to propose scholarships without questioning if the costs of the scholarship will be misused from the student, moreover studentss will have to take this scholarship seriously so that they don't lose the collateral.

## Problem

Providing scholarships based on only the student profile is not always a fair decision. There is a room for mismanagement of funds and untimely distribution in the case of having a lot of candidates.
My proposed project is not helpful in making the decision of who deserves the scholarship better, but it guarantees that the student will pass the required tests at the end of the scholarship or use her collateral to propose a new chance for a new student.

## Solution

Storing scholarship funds in smart contracts reduces the risk of money mismanagement by using a collateral on a smart contract. The smart contract is responsible for:
- Initializing contracts for the scholarship.
- Creating a whitelist for accepted candidates.
- Allowing the chosen candidate to apply for the scholarship.
- Collecting all the students' collaterals.
- Restoring collateral funds to the successful students at the end of the scholarship.
