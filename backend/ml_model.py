# ml_model.py

def predict_from_file(file_bytes):
    """
    Dummy ML model for testing.
    Takes file bytes, performs basic operation, returns fake prediction.
    """
    content_size = len(file_bytes)

    # Simulate "enrichment" based on file size
    if content_size == 0:
        return "File is empty. Please upload valid design files."
    elif content_size < 100:
        return "Basic aircraft design detected. Consider adding more  specifications."
    elif content_size < 1000:
        return "Intermediate design file processed. Preliminary enrichment complete."
    else:
        return "Comprehensive aircraft design recognized. Full enrichment applied."

