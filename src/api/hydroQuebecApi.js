
const BASE_URL = 'https://example.com/api'; // Replace with your actual base URL

export async function fetchTotalDemandData() {
    const url = `${BASE_URL}/totalDemand`; // Replace with your actual endpoint URL

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching total demand data:', error);
        throw error;
    }
}
