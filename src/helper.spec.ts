import { br, groupByType, now } from './helpers';
import { LogType } from './index.ds';

describe('HELPERS', function() {
  it('Now', async () => {
    expect(typeof now).toBe('function');
    expect(typeof now()).toBe('string');
    const originalValue = process.env.TS_PRINT_ONLY_DATE;
    process.env.TS_PRINT_ONLY_DATE = '1';
    expect(typeof now()).toBe('string');
    process.env.TS_PRINT_ONLY_DATE = originalValue;
  });

  it('groupByType', async () => {
    expect(typeof groupByType).toBe('function');
    expect(groupByType(LogType.fail)).toBe('FAIL');
    expect(groupByType(LogType.err)).toBe('ERR');
    expect(groupByType(LogType.warn)).toBe('ALERT');
    expect(groupByType(LogType.info)).toBe('INFO');
    expect(groupByType(LogType.notice)).toBe('NOTICE');
    expect(groupByType(LogType.success)).toBe('SUCCESS');
    expect(groupByType(LogType.ok)).toBe('OK');
    expect(groupByType('WUT')).toBe('WUT');
  });

  it('Now', async () => {
    expect(typeof br).toBe('function');
    expect(br()).toBe(undefined);
  });
});
