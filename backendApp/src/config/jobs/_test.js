import axios from 'axios'

const jobName = 'TEST_sendTestRequest'

const callback = async (job, done) => {
  try {
    // const res = await axios.get(
    //   ''
    // )
    console.log('Hello world!')
  } catch(err) {
    job.fail(new Error(err))
    await job.save()
  } finally {
    done()
  }
}

export default {
  jobName,
  callback,
  interval: '30 seconds',
  // options: { timezone: 'Europe/Berlin' },
  type: 'single'
}