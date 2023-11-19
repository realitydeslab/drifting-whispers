import fetch from 'node-fetch';
if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

import { LensClient, production, ExploreProfilesOrderByType} from "@lens-protocol/client";
const lensClient = new LensClient({
  environment: production
});


export async function fetchProfileData(profileId) {
  try {
    const profileData = await lensClient.profile.fetch({ forProfileId: profileId });
    const publicationsContent = await fetchPublicationsContent(profileId);

    return {
      name: profileData.handle.fullHandle, // Assuming this is the structure
      character: profileData.handle.fullHandle, // Duplicate of name in this example
      identity: publicationsContent.join(' '), // Concatenate all publication contents
      plan: 'You want to drift.' // Static value as an example
    };
  } catch (error) {
    console.error(`Error fetching data for profile ID ${profileId}:`, error);
    return null;
  }
}

async function fetchPublicationsContent(profileId) {
  const contents = [];
  for (let i = 1; i <= 9; i++) {
    const fullId = `${profileId}-0x${i.toString(16).padStart(2, '0')}`;
    try {
      const result = await lensClient.publication.fetch({ forId: fullId });
      if (result && result.metadata && result.metadata.content) {
        contents.push(result.metadata.content);
      }
    } catch (error) {
      console.error(`Error fetching publication for ID ${fullId}:`, error);
    }
  }
  return contents;
}

// const profileData = await fetchProfileData("0x02");
// console.log(profileData);



// async function fetchAndLogProfileById(profileId) {
//   try {
//     const profileById = await lensClient.profile.fetch({
//       forProfileId: profileId,
//     });

//     console.log(profileById.handle.fullHandle);
//   } catch (error) {
//     console.error(`Error fetching profile for ID ${profileId}:`, error);
//   }
// }




// async function fetchAndLogPublicationsContent(profileId) {
//   for (let i = 1; i < 10; i++) {
//       const fullId = `${profileId}-0x${i.toString(16).padStart(2, '0')}`;
//       try {
//           const result = await lensClient.publication.fetch({ forId: fullId });
//           if (result && result.metadata && result.metadata.content) {
//               console.log(`Content for ${fullId}: ${result.metadata.content}`);
//           }
//       } catch (error) {
//           console.error(`Error fetching publication for ID ${fullId}:`, error);
//       }
//   }
// }



// async function fetchAndLogProfileData(profileId) {
//   await fetchAndLogProfileById(profileId);
//   await fetchAndLogPublicationsContent(profileId);
// }

// await fetchAndLogProfileData("0x02"); 
