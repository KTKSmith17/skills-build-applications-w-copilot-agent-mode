from pymongo import MongoClient
from bson import ObjectId
from datetime import timedelta

def timedelta_to_seconds(td):
    return int(td.total_seconds())

def main():
    client = MongoClient('localhost', 27017)
    db = client['octofit_db']

    # Drop existing collections
    db.users.drop()
    db.teams.drop()
    db.activity.drop()
    db.leaderboard.drop()
    db.workouts.drop()

    # Create users
    users = [
        {"_id": ObjectId(), "username": "thundergod", "email": "thundergod@mhigh.edu", "password": "thundergodpassword"},
        {"_id": ObjectId(), "username": "metalgeek", "email": "metalgeek@mhigh.edu", "password": "metalgeekpassword"},
        {"_id": ObjectId(), "username": "zerocool", "email": "zerocool@mhigh.edu", "password": "zerocoolpassword"},
        {"_id": ObjectId(), "username": "crashoverride", "email": "crashoverride@mhigh.edu", "password": "crashoverridepassword"},
        {"_id": ObjectId(), "username": "sleeptoken", "email": "sleeptoken@mhigh.edu", "password": "sleeptokenpassword"},
    ]
    db.users.insert_many(users)

    # Create teams
    blue_team = {"_id": ObjectId(), "name": "Blue Team", "members": [user["_id"] for user in users]}
    gold_team = {"_id": ObjectId(), "name": "Gold Team", "members": [user["_id"] for user in users]}
    db.teams.insert_many([blue_team, gold_team])

    # Create activities
    activities = [
        {"_id": ObjectId(), "user": users[0]["_id"], "activity_type": "Cycling", "duration": timedelta_to_seconds(timedelta(hours=1))},
        {"_id": ObjectId(), "user": users[1]["_id"], "activity_type": "Crossfit", "duration": timedelta_to_seconds(timedelta(hours=2))},
        {"_id": ObjectId(), "user": users[2]["_id"], "activity_type": "Running", "duration": timedelta_to_seconds(timedelta(hours=1, minutes=30))},
        {"_id": ObjectId(), "user": users[3]["_id"], "activity_type": "Strength", "duration": timedelta_to_seconds(timedelta(minutes=30))},
        {"_id": ObjectId(), "user": users[4]["_id"], "activity_type": "Swimming", "duration": timedelta_to_seconds(timedelta(hours=1, minutes=15))},
    ]
    db.activity.insert_many(activities)

    # Create leaderboard entries
    leaderboard_entries = [
        {"_id": ObjectId(), "user": users[0]["_id"], "score": 100},
        {"_id": ObjectId(), "user": users[1]["_id"], "score": 90},
        {"_id": ObjectId(), "user": users[2]["_id"], "score": 95},
        {"_id": ObjectId(), "user": users[3]["_id"], "score": 85},
        {"_id": ObjectId(), "user": users[4]["_id"], "score": 80},
    ]
    db.leaderboard.insert_many(leaderboard_entries)

    # Create workouts
    workouts = [
        {"_id": ObjectId(), "name": "Cycling Training", "description": "Training for a road cycling event"},
        {"_id": ObjectId(), "name": "Crossfit", "description": "Training for a crossfit competition"},
        {"_id": ObjectId(), "name": "Running Training", "description": "Training for a marathon"},
        {"_id": ObjectId(), "name": "Strength Training", "description": "Training for strength"},
        {"_id": ObjectId(), "name": "Swimming Training", "description": "Training for a swimming competition"},
    ]
    db.workouts.insert_many(workouts)

    print("Successfully inserted test data into octofit_db.")

if __name__ == "__main__":
    main()
