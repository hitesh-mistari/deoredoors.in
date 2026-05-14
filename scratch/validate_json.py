import json
import sys

try:
    with open('/Users/hiteshsureshmistari/projects/deoredoors.in/deore-doors.json', 'r') as f:
        json.load(f)
    print("JSON is valid")
except json.JSONDecodeError as e:
    print(f"JSON is invalid: {e}")
    print(f"Error at line {e.lineno}, column {e.colno}")
