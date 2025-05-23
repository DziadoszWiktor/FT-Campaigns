import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './CampaignForm.css';

const CampaignSchema = Yup.object().shape({
  name: Yup.string().required("Campaign name is required."),
  productId: Yup.string().required("Product is required."),
  keywords: Yup.array().min(1, "At least one keyword is required."),
  bid: Yup.number().min(1, "Bid must be at least 1.").required(),
  fund: Yup.number().positive("Campaign fund is required and must be positive.").required(),
  status: Yup.boolean(),
  town: Yup.string().required("Town is required."),
  radius: Yup.number().positive("Radius is required and must be positive.").required(),
});

const CampaignForm = ({
  onSubmit,
  towns = [],
  keywordsList = [],
  products = [],
  initialValues = {},
  onCancel,
}) => {
  const defaultInitial = {
    name: "",
    productId: "",
    keywords: [],
    bid: "",
    fund: "",
    status: true,
    town: "",
    radius: "",
    ...initialValues,
  };

  const [keywordInput, setKeywordInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <Formik
      initialValues={defaultInitial}
      validationSchema={CampaignSchema}
      onSubmit={(values, helpers) => onSubmit(values, helpers)}
    >
      {({ values, setFieldValue }) => {
        const suggestions = keywordInput.length
          ? keywordsList.filter(
              kw =>
                kw.toLowerCase().includes(keywordInput.toLowerCase()) &&
                !values.keywords.includes(kw)
            )
          : [];

        const addKeyword = (kw) => {
          if (!kw || values.keywords.includes(kw)) return;
          setFieldValue("keywords", [...values.keywords, kw]);
          setKeywordInput("");
          setShowSuggestions(false);
        };

        return (
          <Form className="campaign-form-wrapper">
            <h2>{initialValues.name ? "Edit Campaign" : "Create Campaign"}</h2>

            {/* Campaign Name */}
            <div>
              <label className="campaign-form-label">Campaign Name *</label>
              <Field name="name" className="campaign-form-input" />
              <ErrorMessage name="name" component="div" className="campaign-form-error" />
            </div>

            {/* Product - below Campaign Name */}
            <div>
              <label className="campaign-form-label">Product *</label>
              <Field as="select" name="productId" className="campaign-form-select">
                <option value="">Choose product...</option>
                {products && products.length > 0 && products.map((prod) => (
                  <option value={prod.id} key={prod.id}>
                    {prod.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="productId" component="div" className="campaign-form-error" />
            </div>

            {/* Keywords */}
            <div style={{ marginTop: 10, position: "relative" }}>
              <label className="campaign-form-label">Keywords *</label>
              <div className="campaign-form-keywords-container">
                {values.keywords.map((kw) => (
                  <span key={kw} className="campaign-form-keyword">
                    {kw}
                    <button
                      type="button"
                      className="campaign-form-keyword-remove"
                      onClick={() =>
                        setFieldValue("keywords", values.keywords.filter(k => k !== kw))
                      }
                    >×</button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                value={keywordInput}
                className="campaign-form-input"
                placeholder="Type to add keyword"
                autoComplete="off"
                onChange={e => {
                  setKeywordInput(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                onKeyDown={e => {
                  if (e.key === "Enter" && keywordInput) {
                    e.preventDefault();
                    addKeyword(keywordInput.trim());
                  }
                }}
              />
              {showSuggestions && suggestions.length > 0 && (
                <div className="campaign-form-typeahead">
                  {suggestions.map((kw) => (
                    <div
                      key={kw}
                      className="campaign-form-typeahead-option"
                      onMouseDown={() => addKeyword(kw)}
                    >
                      {kw}
                    </div>
                  ))}
                </div>
              )}
              <ErrorMessage name="keywords" component="div" className="campaign-form-error" />
            </div>

            {/* Bid amount */}
            <div>
              <label className="campaign-form-label">Bid amount *</label>
              <Field name="bid" type="number" className="campaign-form-input" />
              <ErrorMessage name="bid" component="div" className="campaign-form-error" />
            </div>

            {/* Campaign fund */}
            <div>
              <label className="campaign-form-label">Campaign fund *</label>
              <Field name="fund" type="number" className="campaign-form-input" />
              <ErrorMessage name="fund" component="div" className="campaign-form-error" />
            </div>

            {/* Status */}
            <div>
              <label className="campaign-form-label">Status *</label>
              <Field name="status" as="select" className="campaign-form-select">
                <option value={true}>On</option>
                <option value={false}>Off</option>
              </Field>
            </div>

            {/* Town */}
            <div>
              <label className="campaign-form-label">Town *</label>
              <Field name="town" as="select" className="campaign-form-select">
                <option value="">Choose town...</option>
                {towns && towns.length > 0 && towns.map((t) => (
                  <option value={t} key={t}>{t}</option>
                ))}
              </Field>
              <ErrorMessage name="town" component="div" className="campaign-form-error" />
            </div>

            {/* Radius */}
            <div>
              <label className="campaign-form-label">Radius (km) *</label>
              <Field name="radius" type="number" className="campaign-form-input" />
              <ErrorMessage name="radius" component="div" className="campaign-form-error" />
            </div>

            {/* Actions */}
            <div className="campaign-form-actions">
              <button type="submit" className="campaign-form-submit">
                {initialValues.name ? "Save Changes" : "Create Campaign"}
              </button>
              {onCancel && (
                <button
                  type="button"
                  onClick={onCancel}
                  className="campaign-form-cancel"
                >
                  Cancel
                </button>
              )}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CampaignForm;
