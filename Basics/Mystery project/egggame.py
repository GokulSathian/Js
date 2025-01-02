import random
import time

class MysteryEggGame:
    def __init__(self):
        self.creatures = {
            'Common': ['Chick', 'Sparrow', 'Parrot'],
            'Rare': ['Phoenix', 'Owl', 'Peacock'],
            'Epic': ['Griffin', 'Thunderbird'],
            'Legendary': ['Dragon', 'Unicorn', 'Wyvern']
        }
        self.rarity_chances = {
            'Common': 70,
            'Rare': 20,
            'Epic': 8,
            'Legendary': 2
        }

    def generate_egg(self):
        """Generates an egg with rarity based on predefined probabilities."""
        roll = random.randint(1, 100)
        if roll <= self.rarity_chances['Legendary']:
            return 'Legendary'
        elif roll <= self.rarity_chances['Legendary'] + self.rarity_chances['Epic']:
            return 'Epic'
        elif roll <= self.rarity_chances['Legendary'] + self.rarity_chances['Epic'] + self.rarity_chances['Rare']:
            return 'Rare'
        else:
            return 'Common'

    def hatch_egg(self, rarity):
        """Simulates the hatching process and returns a random creature based on rarity."""
        print(f"Hatching a {rarity} egg... ⏳")
        time.sleep(2)  # Simulate time delay
        creature = random.choice(self.creatures[rarity])
        print(f"🎉 A {creature} has hatched! 🎉")
        return creature

    def play(self):
        """Main game loop to collect and hatch eggs."""
        print("Welcome to Mystery Egg Hatchery! 🥚")
        while True:
            action = input("Type 'collect' to get an egg or 'exit' to quit: ").lower()
            if action == 'exit':
                print("Thanks for playing! 👋")
                break
            elif action == 'collect':
                rarity = self.generate_egg()
                print(f"You found a {rarity} egg! 🥚")
                hatch_now = input("Do you want to hatch it? (yes/no): ").lower()
                if hatch_now == 'yes':
                    self.hatch_egg(rarity)
                else:
                    print("Egg saved for later! 📦")
            else:
                print("Invalid command. Try again!")


# Run the game
game = MysteryEggGame()
game.play()
