import fetch from 'node-fetch';

// The handler function Vercel looks for
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed. Must be POST.' });
    }

    // 1. Get the employee name extracted by the Vapi LLM
    const { employeeName } = req.body;

    if (!employeeName) {
        // Vapi expects a 'result' key, even for errors
        return res.status(200).json({ 
            result: "Error: No employee name was provided in the tool request." 
        });
    }

    // 2. Call the DummyJSON search endpoint with the name
    const apiResponse = await fetch(`https://dummyjson.com/users/search?q=${employeeName}`);
    const userData = await apiResponse.json();

    let result;

    // Check if any users were returned
    if (userData.users && userData.users.length > 0) {
        const foundUser = userData.users[0]; // Take the best match

        // 3. FOUND: Construct a clean, natural-language result for the LLM
        result = `Employee Found. Name: ${foundUser.firstName} ${foundUser.lastName}, Title: ${foundUser.title}, Contact Email: ${foundUser.email}.`;
    } else {
        // 4. NOT FOUND: Provide a clear error message
        result = `Employee Not Found. I could not find anyone matching the name ${employeeName}.`;
    }

    // 5. Send the clean result back to Vapi for the LLM to speak
    return res.status(200).json({ result: result });
}
