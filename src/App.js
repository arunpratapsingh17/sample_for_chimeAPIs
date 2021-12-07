import logo from './logo.svg';
import './App.css';
import { listChannelMemberships, listChannels } from './api/ChimeAPI';
import {useEffect} from "react";
import AWS from "aws-sdk"
import appConfig from './Config';
import { Auth } from '@aws-amplify/auth';
function App() {
  useEffect(()=>{
    console.log(AWS.config);
    //Authenticated credentials required for any API request.
    const creds = await Auth.currentCredentials();
    const essentialCreds = await Auth.essentialCredentials(creds);
    AWS.config.credentials = essentialCreds;
    AWS.config.region = appConfig.region;
    console.log(AWS.config);
  },[])
  const onClickHandler=async()=>{
    //Sample API run.
    const res = await listChannels('arn:aws:chime:us-east-1:587273692666:app-instance/8bb40969-423c-4e01-906d-6298cacb6def',"us-east-1:aa34a01a-25ab-4112-b611-48f1b03f4375");
    console.log(res);
  }
  return (
    <div className="App">
      <p>Hey</p>
      <button onClick={onClickHandler}>
        Click to run fetchPublicChatroomAPI
      </button>
    </div>
  );
}

export default App;
