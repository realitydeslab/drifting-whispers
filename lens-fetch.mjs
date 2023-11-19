import { fetchProfileData } from './function-lens-fetch.mjs'

// Usage
async function main() {
  const data = await fetchProfileData('0x06');
  console.log(data);
}

main();
