import React from "react";
function Create (){
    return(
        <>
        <div className="d-flex w-100 vh-100 justify-content-center alighn-item-center">
            <div className="w-50 border b-secondary text-white p-5">
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="form-control"></input>
                    </div>
                    <div>
                        <label htmlFor="Emali">Email</label>
                        <input type="text" name="email" className="form-control"></input>
                    </div>
                    <button></button>


                </form>
            </div>
        </div>

        </>
    )
}
export default Create