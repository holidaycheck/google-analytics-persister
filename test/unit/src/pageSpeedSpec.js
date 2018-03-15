import test from 'ava';
import sinon from 'sinon';
import pageSpeed from '../../../src/pageSpeed';

test('fetches data from page speed online', t => {
    const fetcher = sinon.stub().resolves();
    const expectedUrl = 'https://www.googleapis.com/pagespeedonline/v4/runPagespeed?url=http://holidaycheck.de';
    pageSpeed(fetcher);

    t.is(fetcher.callCount, 1);
    t.true(fetcher.calledWith(expectedUrl));
});

test('parses speed index from the response', async t => {
    const score = 64;
    const response = {
        data: {
            ruleGroups: {
                SPEED: { score }
            }
        }
    };
    const fetcher = sinon.stub().resolves(response);
    const result = await pageSpeed(fetcher);

    t.is(result, score);
});
