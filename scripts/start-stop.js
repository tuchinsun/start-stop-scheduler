//@auth @req(action)

var c = jelastic.env.control, e = '${env.envName}', s = session;
switch (action) {
    case 'start': return c.StartEnv(e, s);
    case 'stop': return c.StopEnv(e, s, -1);
    case 'sleep': return c.SleepEnv(e, s);
    default: return {result: 99, error: 'unknown action [' + a + ']'}