from fastapi import APIRouter



router = APIRouter(
    prefix='/api', tags=['Phone Book'],
    responses={404: {'description' : 'Not found'}}
)


@router.get('/contactlist')
async def get_contacts():
    return [
        {'id': 1, 'firstName': 'Amos', 'lastName': 'Kipyegon', 'phone': '0794818111'}
    ]