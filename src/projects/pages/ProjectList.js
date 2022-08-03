import React from "react";
import { Link } from "react-router-dom";
import ProjectItem from "./ProjectItem";
const ProjectLists = props => {

    if (props.items.length === 0) {
      return (
        <div className="center">
            <h2>No Projects found!</h2>
        </div>  
      )
    } 

    return <React.Fragment>
      
      <div className={`filter_drop ${ props.show && "shown"}`}> 
		<div className="bg_overlay" onClick={props.onCancel}></div>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div class="frm_wrap">
							<fieldset>
								<legend>Type:</legend>
								<label>
									<input type="checkbox" />
									<span className="checkmark"></span>
									All
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Dine
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Discover
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Meet
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Play
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Stay
								</label>
							</fieldset>



							<fieldset>
								<legend>Role:</legend>
								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									All
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Developed
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Managed
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Investment
								</label>
							</fieldset>



							<fieldset>
								<legend>Location:</legend>
								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									All
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Yas Island, Abu Dhabi
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Saadiyat Island, Abu Dhabi
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Abu Dhabi City
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Jordan
								</label>


								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Kazakhstan
								</label>
							</fieldset>


							<fieldset>
								<legend>Business:</legend>
								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									All
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Miral Group
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Miral Destinations
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Miral Experiences
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Yas Asset Management
								</label>
							</fieldset>


							<fieldset>
								<legend>More:</legend>
								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Destination
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Favourites
								</label>
							</fieldset>



							<div className="bt_wrap">
								<button className="show_results" onClick={props.onCancel}>Show 53 results</button>
								<button className="reset"> Reset</button>
							</div>
						</div>
					</div>
				</div>
			</div>
	</div>
  <div className="container">
      <div className="row bt_row">
        <div className="col-md-12">
          <div className="bt_left">
            <button className={`${props.show && 'active'}`} onClick={props.onShow}>Filter</button>
          </div>

          <div className="bt_right">
            <a  className="btn dark" href="projects-main.html">Thumbnails</a>
			<Link className="btn" to="/map">Map</Link>
          </div>
        </div>
      </div>


      <div className="row filter_tags">
        <div className="col-md-12">
          <p>
            <span>Type: <strong>All</strong></span>
            <span>Role: <strong>All</strong></span>
            <span>Location: <strong>Yas Island, Abu Dhabi</strong></span>
          </p>
        </div>
      </div>
      
        <div className="row portfolio_grid"> 
        

          {props.items.map(project => {
              return <ProjectItem 
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              location={project.location}
			  image={project.image[0]}
              />;
          })}
        </div>
      </div>

      
    </React.Fragment>

};

export default ProjectLists;