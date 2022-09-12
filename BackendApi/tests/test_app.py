from fastapi.testclient import TestClient
from main import app


client = TestClient(app=app)

def test_get_contact_list():
    response = client.get('/api/getcontactlist/')

    assert response.status_code == 200

def test_create_contact():
    response = client.post(
        '/api/createcontact/',
        json={'firstName': 'Omic', 'lastName': 'Rocks', 'phone': '5558675309'}
    )

    assert response.status_code == 200
