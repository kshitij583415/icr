import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Page4 = () => {
  const navigate = useNavigate();

  // State to manage form data
  const [formData, setFormData] = useState({
    yearsOfMarriedLife: '',
    arranged: '',
    acceptedByFamily: '',
    previousMarriages: '',
    separatedDueToAddiction: '',
    suspiciousOfWife: '',
    familyViolence: '',
    physicalViolence: '',
    verballyAbusive: '',
    violentIncident: '',
    breakingArticles: '',
    maleChildren: '',
    femaleChildren: '',
    majorDepressionParents: false,
    // Add other fields and their initial values
  });

  useEffect(() => {
    // Load data from local storage when the component mounts
    const loadDataFromLocalStorage = () => {
      const storedData = localStorage.getItem('familyDataPage4');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setFormData(parsedData);
      }
    };
    loadDataFromLocalStorage();
  }, []);

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name, checked) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const goToNextPage = async () => {
    try {
      // Save data to local storage
      localStorage.setItem('familyDataPage4', JSON.stringify(formData));
      // Make a POST request to the server (optional)
      // ...
    } catch (error) {
      console.error('Error:', error);
    } finally {
      // Navigate to the next page
      navigate('/family/page5');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const goToPrevPage = () => {
    // Perform any necessary validation or data processing before navigating
    // Navigate to the previous page
    navigate('/family/page3');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="fh_page fh_page4">
      <strong>
        Other details about spouse (history of addiction in her family, her
        addiction history if any, any other significant event in her life, and
        attitude towards addiction)
      </strong>
      <table className="fh_family">
        <tbody className='fh_table'>
          <tr>
            <td className="lessWidth fh_td ">12. Years of married life</td>
            <td className='fh_td'>
              <input
                className='fh_input'
                type="number"
                id="yearsOfMarriedLife"
                placeholder="Enter years"
                value={formData.yearsOfMarriedLife}
                onChange={(e) =>
                  handleInputChange('yearsOfMarriedLife', e.target.value)
                }
              />
            </td>
          </tr>
          <tr>
            <td className="lessWidth fh_td">
              13. Is this marriage arranged or by choice?
            </td>
            <td className="fh_flex fh_td">
              <label>
                <input
                  className='fh_input'
                  type="radio"
                  name="arranged"
                  value="yes"
                  checked={formData.arranged === 'yes'}
                  onChange={(e) => handleInputChange('arranged', e.target.value)}
                />{' '}
                Yes
              </label>
              <label>
                <input
                  className='fh_input'
                  type="radio"
                  name="arranged"
                  value="no"
                  checked={formData.arranged === 'no'}
                  onChange={(e) => handleInputChange('arranged', e.target.value)}
                />{' '}
                No
              </label>
            </td>
          </tr>
          <tr>
            <td className="fh_lessWidth fh_td">
              If by choice, accepted by family (present status)
            </td>
            <td className="fh_flex fh_td">
              <label>
                <input
                  className='fh_input'
                  type="radio"
                  name="acceptedByFamily"
                  value="yes"
                  checked={formData.acceptedByFamily === 'yes'}
                  onChange={(e) =>
                    handleInputChange('acceptedByFamily', e.target.value)
                  }
                />{' '}
                Yes
              </label>
              <label>
                <input
                  className='fh_input'
                  type="radio"
                  name="acceptedByFamily"
                  value="no"
                  checked={formData.acceptedByFamily === 'no'}
                  onChange={(e) =>
                    handleInputChange('acceptedByFamily', e.target.value)
                  }
                />{' '}
                No
              </label>
            </td>
          </tr>
          <tr>
            <td className="fh_lessWidth fh_td">
              14. Details regarding previous subsequent marriages. If any
            </td>
            <td className="fh_flex fh_td">
              <label>
                <input
                  className='fh_input'
                  type="radio"
                  name="previousMarriages"
                  value="yes"
                  checked={formData.previousMarriages === 'yes'}
                  onChange={(e) =>
                    handleInputChange('previousMarriages', e.target.value)
                  }
                />{' '}
                Yes
              </label>
              <label>
                <input
                  className='fh_input'
                  type="radio"
                  name="previousMarriages"
                  value="no"
                  checked={formData.previousMarriages === 'no'}
                  onChange={(e) =>
                    handleInputChange('previousMarriages', e.target.value)
                  }
                />{' '}
                No
              </label>
            </td>
          </tr>
          <tr>
            <td className="fh_lessWidth fh_td">
              15. Have you been separated from your spouse due to your addiction?
            </td>
            <td className="fh_flex fh_td">
              <label>
                <input
                  className='fh_input'
                  type="radio"
                  name="separatedDueToAddiction"
                  value="yes"
                  checked={formData.separatedDueToAddiction === 'yes'}
                  onChange={(e) =>
                    handleInputChange('separatedDueToAddiction', e.target.value)
                  }
                />{' '}
                Yes
              </label>
              <label>
                <input
                  className='fh_input'
                  type="radio"
                  name="separatedDueToAddiction"
                  value="no"
                  checked={formData.separatedDueToAddiction === 'no'}
                  onChange={(e) =>
                    handleInputChange('separatedDueToAddiction', e.target.value)
                  }
                />{' '}
                No
              </label>
            </td>
          </tr>
          <tr>
            <td className="fh_lessWidth fh_td">16. Is patient suspicious of wife?</td>
            <td className="fh_flex fh_td">
              <label>
                <input
                  className='fh_input'
                  type="radio"
                  name="suspiciousOfWife"
                  value="whileInfluenceOfAlcoholDrugs"
                  checked={formData.suspiciousOfWife === 'whileInfluenceOfAlcoholDrugs'}
                  onChange={(e) =>
                    handleInputChange('suspiciousOfWife', e.target.value)
                  }
                />
                Under the influence of alcohol/drugs
              </label>
              <label>
                <input
                  className='fh_input'
                  type="radio"
                  name="suspiciousOfWife"
                  value="abstinence"
                  checked={formData.suspiciousOfWife === 'abstinence'}
                  onChange={(e) => handleInputChange('suspiciousOfWife', e.target.value)}
                />While Abstinence
              </label>
            </td>
          </tr>
          <tr>
            <td className="fh_lessWidth fh_td">
              17. Any instance of family violence
            </td>
            <td className="fh_flex fh_td">
              <label>
                <input
                  className='fh_input'
                  type="radio"
                  name="familyViolence"
                  value="yes"
                  checked={formData.familyViolence === 'yes'}
                  onChange={(e) => handleInputChange('familyViolence', e.target.value)}
                />Yes
              </label>
              <label>
                <input
                  className='fh_input'
                  type="radio"
                  name="familyViolence"
                  value="no"
                  checked={formData.familyViolence === 'no'}
                  onChange={(e) => handleInputChange('familyViolence', e.target.value)}
                /> No
              </label>
            </td>
          </tr>
          <tr>
            <td className="fh_lessWidth fh_td">
              Physical violence directed towards family members
            </td>
            <td className="fh_flex fh_td">
              <label>
                <input
                  className='fh_input'
                  type="radio"
                  name="physicalViolence"
                  value="yes"
                  checked={formData.physicalViolence === 'yes'}
                  onChange={(e) => handleInputChange('physicalViolence', e.target.value)}
                />
                Yes
              </label>
              <label>
                <input
                  className='fh_input'
                  type="radio"
                  name="physicalViolence"
                  value="no"
                  checked={formData.physicalViolence === 'no'}
                  onChange={(e) => handleInputChange('physicalViolence', e.target.value)}
                /> No
              </label>
            </td>
          </tr>
          <tr>
            <td className="fh_lessWidth fh_td">Verbally abusive</td>
            <td className="fh_flex fh_td">
              <label>
                <input
                  className='fh_input'
                  type="radio"
                  name="verballyAbusive"
                  value="yes"
                  checked={formData.verballyAbusive === 'yes'}
                  onChange={(e) => handleInputChange('verballyAbusive', e.target.value)}
                />
                Yes
              </label>
              <label>
                <input
                  className='fh_input'
                  type="radio"
                  name="verballyAbusive"
                  value="no"
                  checked={formData.verballyAbusive === 'no'}
                  onChange={(e) => handleInputChange('verballyAbusive', e.target.value)}
                /> No
              </label>
            </td>
          </tr>
          <tr>
            <td className="fh_lessWidth fh_td">
              Violent incident with neighbors and outsiders
            </td>
            <td className="fh_flex fh_td">
              <label>
                <input
                  className='fh_input'
                  type="radio"
                  name="violentIncident"
                  value="yes"
                  checked={formData.violentIncident === 'yes'}
                  onChange={(e) => handleInputChange('violentIncident', e.target.value)}
                />
                Yes
              </label>
              <label>
                <input
                  className='fh_input'
                  type="radio"
                  name="violentIncident"
                  value="no"
                  checked={formData.violentIncident === 'no'}
                  onChange={(e) => handleInputChange('violentIncident', e.target.value)}
                /> No
              </label>
            </td>
          </tr>
          <tr>
            <td className="fh_lessWidth fh_td">Breaking articles at home</td>
            <td className="fh_flex fh_td">
              <label>
                <input
                  className='fh_input'
                  type="radio"
                  name="breakingArticles"
                  value="yes"
                  checked={formData.breakingArticles === 'yes'}
                  onChange={(e) => handleInputChange('breakingArticles', e.target.value)}
                />
                Yes
              </label>
              <label>
                <input
                  className='fh_input'
                  type="radio"
                  name="breakingArticles"
                  value="no"
                  checked={formData.breakingArticles === 'no'}
                  onChange={(e) => handleInputChange('breakingArticles', e.target.value)}
                /> No
              </label>
            </td>
          </tr>
          <tr>
            <td className="fh_lessWidth fh_td">18. Details regarding children</td>
            <td className="fh_flex fh_td">
              <label>
                Male{' '}
                <input
                  type="text"
                  className='fh_input'
                  placeholder="Enter number"
                  value={formData.maleChildren}
                  onChange={(e) =>
                    handleInputChange('maleChildren', e.target.value)
                  }
                />
              </label>
              <label>
                Female{' '}
                <input
                  type="text"
                  className='fh_input'
                  placeholder="Enter number"
                  value={formData.femaleChildren}
                  onChange={(e) =>
                    handleInputChange('femaleChildren', e.target.value)
                  }
                />
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h2>
        <h2 className='fh_h2'>19.Health status of family</h2>
        <br />
        Has there been anyone in your family who has suffered from any of these
        problems?
      </h2>
      <table className='fh_table'>
        <tbody>
          <tr>
            <th className='fh_th'></th>
            <th className='fh_th' colspan="3">Parents & Siblings</th>
            <th className='fh_th' colspan="3">Wife/Children</th>
          </tr>
          <tr>
            <th className='fh_th'>Problems</th>
            <th className='fh_th'>Yes</th>
            <th className='fh_th'>No</th>
            <th className='fh_th'>Don't Know</th>
            <th className='fh_th'>Yes</th>
            <th className='fh_th'>No</th>
            <th className='fh_th'>Don't Know</th>
          </tr>
          <tr>
            <td className='fh_td'>Major depression</td>
            <td className='fh_td'>
              <input
                type="radio"
                className='fh_input'
                name="majorDepressionParents"
                value="yes"
                checked={formData.majorDepressionParents === 'yes'}
                onChange={(e) =>
                  handleInputChange('majorDepressionParents', e.target.value)
                }
              />
            </td>
            <td className='fh_td'>
              <input
                type="radio"
                className='fh_input'
                name="majorDepressionParents"
                value="no"
                checked={formData.majorDepressionParents === 'no'}
                onChange={(e) =>
                  handleInputChange('majorDepressionParents', e.target.value)
                }
              />
            </td>
            <td className='fh_td'>
              <input
                type="radio"
                className='fh_input'
                name="majorDepressionParents"
                value="dontKnow"
                checked={formData.majorDepressionParents === 'dontKnow'}
                onChange={(e) =>
                  handleInputChange('majorDepressionParents', e.target.value)
                }
              />
            </td>
            <td className='fh_td'>
              <input
                type="radio"
                className='fh_input'
                name="majorDepressionWife"
                value="yes"
                checked={formData.majorDepressionWife === 'yes'}
                onChange={(e) =>
                  handleInputChange('majorDepressionWife', e.target.value)
                }
              />
            </td>
            <td className='fh_td'>
              <input
                type="radio"
                className='fh_input'
                name="majorDepressionWife"
                value="no"
                checked={formData.majorDepressionWife === 'no'}
                onChange={(e) =>
                  handleInputChange('majorDepressionWife', e.target.value)
                }
              />
            </td>
            <td className='fh_td'>
              <input
                type="radio"
                className='fh_input'
                name="majorDepressionWife"
                value="dontKnow"
                checked={formData.majorDepressionWife === 'dontKnow'}
                onChange={(e) =>
                  handleInputChange('majorDepressionWife', e.target.value)
                }
              />
            </td>
          </tr>
          <tr>
  <td className='fh_td'>Suicide/attempted</td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="suicideParents"
      value="yes"
      checked={formData.suicideParents === 'yes'}
      onChange={(e) => handleInputChange('suicideParents', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="suicideParents"
      value="no"
      checked={formData.suicideParents === 'no'}
      onChange={(e) => handleInputChange('suicideParents', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="suicideParents"
      value="dontKnow"
      checked={formData.suicideParents === 'dontKnow'}
      onChange={(e) => handleInputChange('suicideParents', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="suicideWife"
      value="yes"
      checked={formData.suicideWife === 'yes'}
      onChange={(e) => handleInputChange('suicideWife', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="suicideWife"
      value="no"
      checked={formData.suicideWife === 'no'}
      onChange={(e) => handleInputChange('suicideWife', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="suicideWife"
      value="dontKnow"
      checked={formData.suicideWife === 'dontKnow'}
      onChange={(e) => handleInputChange('suicideWife', e.target.value)}
    />
  </td>
</tr>
<tr>
  <td className='fh_td'>Psychiatric illnesses</td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="psychiatricIllnessesParents"
      value="yes"
      checked={formData.psychiatricIllnessesParents === 'yes'}
      onChange={(e) => handleInputChange('psychiatricIllnessesParents', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="psychiatricIllnessesParents"
      value="no"
      checked={formData.psychiatricIllnessesParents === 'no'}
      onChange={(e) => handleInputChange('psychiatricIllnessesParents', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="psychiatricIllnessesParents"
      value="dontKnow"
      checked={formData.psychiatricIllnessesParents === 'dontKnow'}
      onChange={(e) => handleInputChange('psychiatricIllnessesParents', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="psychiatricIllnessesWife"
      value="yes"
      checked={formData.psychiatricIllnessesWife === 'yes'}
      onChange={(e) => handleInputChange('psychiatricIllnessesWife', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="psychiatricIllnessesWife"
      value="no"
      checked={formData.psychiatricIllnessesWife === 'no'}
      onChange={(e) => handleInputChange('psychiatricIllnessesWife', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="psychiatricIllnessesWife"
      value="dontKnow"
      checked={formData.psychiatricIllnessesWife === 'dontKnow'}
      onChange={(e) => handleInputChange('psychiatricIllnessesWife', e.target.value)}
    />
  </td>
</tr>
<tr>
  <td className='fh_td'>Alcohol dependence</td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="alcoholDependenceParents"
      value="yes"
      checked={formData.alcoholDependenceParents === 'yes'}
      onChange={(e) => handleInputChange('alcoholDependenceParents', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="alcoholDependenceParents"
      value="no"
      checked={formData.alcoholDependenceParents === 'no'}
      onChange={(e) => handleInputChange('alcoholDependenceParents', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="alcoholDependenceParents"
      value="dontKnow"
      checked={formData.alcoholDependenceParents === 'dontKnow'}
      onChange={(e) => handleInputChange('alcoholDependenceParents', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="alcoholDependenceWife"
      value="yes"
      checked={formData.alcoholDependenceWife === 'yes'}
      onChange={(e) => handleInputChange('alcoholDependenceWife', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="alcoholDependenceWife"
      value="no"
      checked={formData.alcoholDependenceWife === 'no'}
      onChange={(e) => handleInputChange('alcoholDependenceWife', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="alcoholDependenceWife"
      value="dontKnow"
      checked={formData.alcoholDependenceWife === 'dontKnow'}
      onChange={(e) => handleInputChange('alcoholDependenceWife', e.target.value)}
    />
  </td>
</tr>
<tr>
  <td className='fh_td'>Drug dependence</td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="drugDependenceParents"
      value="yes"
      checked={formData.drugDependenceParents === 'yes'}
      onChange={(e) => handleInputChange('drugDependenceParents', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="drugDependenceParents"
      value="no"
      checked={formData.drugDependenceParents === 'no'}
      onChange={(e) => handleInputChange('drugDependenceParents', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="drugDependenceParents"
      value="dontKnow"
      checked={formData.drugDependenceParents === 'dontKnow'}
      onChange={(e) => handleInputChange('drugDependenceParents', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="drugDependenceWife"
      value="yes"
      checked={formData.drugDependenceWife === 'yes'}
      onChange={(e) => handleInputChange('drugDependenceWife', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="drugDependenceWife"
      value="no"
      checked={formData.drugDependenceWife === 'no'}
      onChange={(e) => handleInputChange('drugDependenceWife', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="drugDependenceWife"
      value="dontKnow"
      checked={formData.drugDependenceWife === 'dontKnow'}
      onChange={(e) => handleInputChange('drugDependenceWife', e.target.value)}
    />
  </td>
</tr>
<tr>
  <td className='fh_td'>Any other</td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="anyOtherParents"
      value="yes"
      checked={formData.anyOtherParents === 'yes'}
      onChange={(e) => handleInputChange('anyOtherParents', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="anyOtherParents"
      value="no"
      checked={formData.anyOtherParents === 'no'}
      onChange={(e) => handleInputChange('anyOtherParents', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="anyOtherParents"
      value="dontKnow"
      checked={formData.anyOtherParents === 'dontKnow'}
      onChange={(e) => handleInputChange('anyOtherParents', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="anyOtherWife"
      value="yes"
      checked={formData.anyOtherWife === 'yes'}
      onChange={(e) => handleInputChange('anyOtherWife', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="anyOtherWife"
      value="no"
      checked={formData.anyOtherWife === 'no'}
      onChange={(e) => handleInputChange('anyOtherWife', e.target.value)}
    />
  </td>
  <td className='fh_td'>
    <input
      className='fh_input'
      type="radio"
      name="anyOtherWife"
      value="dontKnow"
      checked={formData.anyOtherWife === 'dontKnow'}
      onChange={(e) => handleInputChange('anyOtherWife', e.target.value)}
    />
  </td>
</tr>


        </tbody>
      </table>
      <div className="fh_endbtn">
        <button className="fh_prev-btn" onClick={goToPrevPage}>
          &laquo; Prev
        </button>
        <button className="fh_next-btn" onClick={goToNextPage}>
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default Page4;