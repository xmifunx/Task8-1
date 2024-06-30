import Team from '../js/set';

const warrior = { characterName: 'Alex', characterClass: 'Swordsman' };
const mage = { characterName: 'Alissa', characterClass: 'Red Mage' };
const rogue = { characterName: 'Slate', characterClass: 'Rogue' };

test('проверка на ошибку', () => {
  expect(() => {
    const newTeam = new Team();
    newTeam.add(rogue);
    newTeam.add(rogue);
  }).toThrow('Персонаж уже есть в команде');
});

test('добавление персонажа в команду', () => {
  const newTeam = new Team();
  newTeam.add(rogue);
  const memberInPartyCheck = newTeam.members.has(rogue);
  expect(memberInPartyCheck).toBe(true);
});

test('проверка метода addAll', () => {
  const newTeam = new Team();
  newTeam.addAll(rogue, mage, warrior, mage);
  const sizeOfParty = newTeam.members.size;
  expect(sizeOfParty).toBe(3);
});

test('проверка вывода в массив', () => {
  const newTeam = new Team();
  newTeam.addAll(rogue, mage);
  const pretyArrayLookOfParty = newTeam.toArray();
  expect(pretyArrayLookOfParty).toEqual([
    { characterName: 'Slate', characterClass: 'Rogue' },
    { characterName: 'Alissa', characterClass: 'Red Mage' },
  ]);
});
