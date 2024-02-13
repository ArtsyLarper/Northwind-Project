import Header from "../components/Header";
import FormRow from "../components/FormRow";

export default function ReviewFormPage() {
  let questionNum: number = 1;
  return (
    <>
      <Header dashboard="Forms" />
      <div className="formSection">
        <div className="divide">
          <div className="question-card">
            <div className="form-header">
              <h1>Questions</h1>
            </div>
            <div className="form-header-3">
              <h3>Current Responsibilites</h3>
            </div>
            <FormRow
              questionNum={questionNum}
              formQuestion="Job description and/or Job highlights noting any significant changes"
            />
            <div className="form-header-3">
              <h3>Performance Review</h3>
            </div>
            <FormRow
              questionNum={++questionNum}
              formQuestion="Evaluate performance and achieved goals"
            />
            <FormRow
              questionNum={++questionNum}
              formQuestion="Discuss Areas of excellance or improvement"
            />
            <FormRow
              questionNum={++questionNum}
              formQuestion="Discuss areas of development or improvement"
            />
            <FormRow
              questionNum={++questionNum}
              formQuestion="Develop future goals with set expectation"
            />
          </div>
        </div>
      </div>
    </>
  );
}