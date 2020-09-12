import { Test } from '../models'

(async () => {
  if((await Test.find()).length === 0)
    Test.create({
      testString: 'Mongoose DB connection running smoothly!'
    })
})();