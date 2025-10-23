type Callback = (status: string) => void;

function sendDoneStatus(callback: Callback) {
  callback("done");
}

sendDoneStatus((message) => {
  console.log(message);
});
