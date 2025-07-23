async function hello() {
   return "hello";
}
console.log(hello());//without saying the promise it take as promise


const paymentSuccess = true;
const marks = 90;

function enroll() {
  console.log('Enrollment in progress...');
  const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (paymentSuccess) {
        resolve('Enrollment successful!');
      } else {
        reject('Payment failed!');
      }
    }, 1000);
  });
  return promise;
}

function progress() {
  console.log('Checking progress...');
  const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (marks >= 80) {
        resolve('You passed!');
      } else {
        reject('You did not pass.');
      }
    }, 1000);
  });
  return promise;
}

function getCertificate() {
  console.log('Preparing your certificate!');
  const promise = new Promise(function(resolve) {
    setTimeout(function() {
      resolve('Congrats! You got the certificate');
    }, 1000);
  });
  return promise;
}

// Use async-await or promise chaining to run them
async function courseFlow() {
  try {
    const enrolled = await enroll();
    console.log(enrolled);
    const progressed = await progress();
    console.log(progressed);
    const certificate = await getCertificate();
    console.log(certificate);
  } catch (err) {
    console.log(err);
  }
}

courseFlow();