# This is the file that we will read.
raw_email_data = 'raw_email_data.txt'

# This is the file that we will write from.
processed = 'processed_emails.txt'

# Open the file here and perform any operations necessary.
with open(raw_email_data, 'r') as data_file:

	# Read each line of the raw email file, and
	# split on the new line.
	read_data = data_file.read().splitlines()

	# Join each email string together with a comma and a space.
	processed_data = ', '.join(read_data)

# This creates a file named processed_emails.txt and writes
# the new email format to it.
with open(processed, 'a') as write_file:
	
	# Add a header and 
	write_file.write('Processed Emails: \n\n{' + processed_data + '}')
