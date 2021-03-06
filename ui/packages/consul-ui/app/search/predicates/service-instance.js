export default {
  Name: item => item.Name,
  Tags: item => item.Service.Tags || [],
  ID: (item, value) => item.Service.ID || '',
  Address: item => item.Address || '',
  Port: item => (item.Service.Port || '').toString(),
  ['Service.Meta']: item =>
    Object.entries(item.Service.Meta || {}).reduce((prev, entry) => prev.concat(entry), []),
  ['Node.Meta']: item =>
    Object.entries(item.Node.Meta || {}).reduce((prev, entry) => prev.concat(entry), []),
};
