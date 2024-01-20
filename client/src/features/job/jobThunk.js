import customeFetch,{checkForUnauthorizedResponse} from '../../utils/axios';
import { showLoading, hideLoading, getAllJobs } from '../allJobs/allJobsSlice';
import { clearValues } from './jobSlice';
import authHeader from '../../utils/authHeader';

export const createJobThunk = async (job,thunkAPI) => {
    try {
        const res = await customeFetch.post('/jobs',job,authHeader(thunkAPI))
        thunkAPI.dispatch(clearValues())
        return res.data
    }catch (error){
        return checkForUnauthorizedResponse(error, thunkAPI)
    }
}

export const deleteJobThunk = async (jobId,thunkAPI) =>{
    thunkAPI.dispatch(showLoading())
  
    try {
        const resp = await customeFetch.delete(`/jobs/${jobId}`,authHeader(thunkAPI))
        thunkAPI.dispatch(getAllJobs())
        return resp.data.msg
    }catch(error){
        thunkAPI.dispatch(hideLoading())
        return checkForUnauthorizedResponse(error, thunkAPI)
    }

}

export const editJobThunk = async ({jobId,job}, thunkAPI)=>{
    try{
        const resp = await customeFetch.patch(`/jobs/${jobId}`,job, authHeader(thunkAPI))

    thunkAPI.dispatch(clearValues())
     return resp.data
    }catch(error){
        return checkForUnauthorizedResponse(error, thunkAPI)
    }
}