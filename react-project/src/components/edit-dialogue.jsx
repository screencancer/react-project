import React, { useState } from "react";
import "./css/dialogue.css";

const EditDialogue = (props) => {
  const [inputs, setInputs] = useState({
    _id: props._id,
    header: props.header,
    task1Name: props.task1Name,
    task2Name: props.task2Name,
    statusClass: props.statusClass,
    prev_img: props.img,
    img: null,
  });

  console.log("prev img is ", inputs.prev_img);
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const addToServer = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    console.log(...formData);

    const response = await fetch(
      `https://betterplanning-server.onrender.com/api/columns/${props.columnId}/cards/${props.cardId}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    if (response.status === 200) {
      setResult("Card edited successfully");
      event.target.reset();
      props.closeEditDialog();
      props.updateCard(await response.json());
    } else {
      setResult("Error adding house");
    }
  };
  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeEditDialog}
          >
            &times;
          </span>
          <form id="add-property-form" onSubmit={addToServer}>
            <h3>Edit Card</h3>

            <p>
              <label htmlFor="header">Header:</label>
              <input
                type="text"
                id="header"
                name="header"
                value={inputs.header}
                onChange={handleChange}
                required
                min="3"
              ></input>
            </p>

            <p>
              <label htmlFor="task1Name">Task 1:</label>
              <input
                type="text"
                id="task1Name"
                name="task1Name"
                min="0"
                value={inputs.task1Name}
                onChange={handleChange}
                required
              ></input>
            </p>

            <p>
              <label htmlFor="task2Name">Task 2:</label>
              <input
                type="text"
                id="task2Name"
                name="task2Name"
                min="0"
                value={inputs.task2Name}
                onChange={handleChange}
                required
              ></input>
            </p>

            <p>
              <label htmlFor="statusClass">Priority:</label>
              <select
                name="statusClass"
                id="statusClass"
                value={inputs.statusClass || ""}
                onChange={handleChange}
              >
                <option value="non-urgent">Non-urgent</option>
                <option value="urgent">Urgent</option>
                <option value="critical">Critical</option>
              </select>
            </p>

            <section className="columns">
              <p id="img-prev-section">
                <img
                  id="img-prev"
                  src={
                    inputs.img != null
                      ? URL.createObjectURL(inputs.img)
                      : inputs.prev_img != null
                      ? `https://betterplanning-server.onrender.com/${inputs.prev_img}`
                      : ""
                  }
                  alt=""
                />
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </p>
            </section>

            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDialogue;
