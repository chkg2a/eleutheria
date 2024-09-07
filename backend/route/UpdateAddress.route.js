import express from 'express'
import UpdateAddress from '../controller/UpdateAddress.controlletr.js';


const UpdateAddressrouter=express.Router();

UpdateAddressrouter.post("/address",UpdateAddress);
export default UpdateAddressrouter