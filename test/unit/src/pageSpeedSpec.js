import test from 'ava';
import sinon from 'sinon';
import pageSpeed from '../../../src/pageSpeed';

test('fetches data from page speed online', t => {
    const fetcher = sinon.stub();
    const expectedUrl = 'https://www.googleapis.com/pagespeedonline/v4/runPagespeed?url=http://holidaycheck.de';
    pageSpeed(fetcher);

    t.is(fetcher.callCount, 1);
    t.true(fetcher.calledWith(expectedUrl));
});
