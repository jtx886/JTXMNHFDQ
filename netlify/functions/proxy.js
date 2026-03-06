exports.handler = async (event) => {
const uin = event.queryStringParameters.uin;
if (!uin) {
return {
statusCode: 400,
body: JSON.stringify({ error: "缺少uin参数" })
};
}
try {
const response = await fetch( https://api.kona.uno/API/mnsj.php?uin=${uin} );
const data = await response.json();
return {
statusCode: 200,
headers: {
"Access-Control-Allow-Origin": "https://jtx886.github.io",
"Content-Type": "application/json"
},
body: JSON.stringify(data)
};
} catch (error)
