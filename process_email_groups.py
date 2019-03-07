# This is the file that we will read.
raw_email_data = 'raw_email_data.txt'

# Open the file here and perform any operations necessary.
with open(raw_email_data, 'r') as data_file:

	
	read_data = data_file.read().splitlines()
	
	processed_data = ', '.join(read_data)
	
print('{' + processed_data + '}')

